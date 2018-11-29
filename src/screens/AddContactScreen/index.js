import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ImageBackground, Alert } from 'react-native'
import Contacts from 'react-native-contacts'

import TouchPoint from '../../components/TouchPoint'
import ActionButton from '../../components/ActionButton'
import BackButton from '../../components/BackButton'
import Modal from '../../components/Modal'
import Picker from '../../components/Picker'

import styles from './styles'

import { checkData } from '../../libs/validation'

const fieldsLabels = {
  name: {
    label: 'Nom',
    value: 'name',
    isRequired: true,
  },
  email: {
    label: 'Email',
    value: 'email',
  },
  phone: {
    label: 'Numéro de téléphone',
    value: 'phone',
    isRequired: true,
  },
}

class AddContactScreen extends Component {
  static propTypes = {
    onViewPress: PropTypes.func.isRequired,
    uri: PropTypes.string.isRequired,
    touchPoints: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = {
    canAddContact: false,
    canShowPoints: false,
    contact: {},
    modalVisible: false,
    selectedItem: null,
  }

  showModal = selectedItem => this.setState({ modalVisible: true, selectedItem })

  dismissModal = () => this.setState({ modalVisible: false, selectedItem: null })

  checkContactValidity = () => {
    const { contact } = this.state

    const requiredLabels = Object.values(fieldsLabels).filter(label => label.isRequired)
    const canAddContact = requiredLabels.every(label => Object.keys(contact).includes(label.value))

    this.setState({ canAddContact })
  }

  updateContactState = (field, value) => {
    const validData = checkData(field, value)

    if (validData) {
      this.setState(
        prevState => ({
          modalVisible: false,
          contact: {
            ...prevState.contact,
            [field]: validData.text,
          },
        }),
        this.checkContactValidity
      )
    } else {
        this.setState({ modalVisible: false }, () =>
            Alert.alert(
                'Erreur',
                `L'information sélectionnée ne correspond pas à "${fieldsLabels[field].label}"`,
                [{ text: 'Ok', onPress: () => {} }],
                { cancelable: false }
            )
        )
    }
  }

  addContact = () => {
    const { contact } = this.state
    const { onViewPress } = this.props

    const newContact = {
      phoneNumbers: [
        {
          label: 'mobile',
          number: contact.phone,
        },
      ],
      emailAddresses: [
        {
          label: 'work',
          email: contact.email || '',
        },
      ],
      displayName: contact.name,
    }

    Contacts.openContactForm(newContact, err => {
      if (err) {
        console.log('handle addContact error', err)
      }
    })

    setTimeout(() => {
      Alert.alert(
        'Félicitations !',
        'Votre contact a bien été ajouté.',
        [
          { text: 'Je recommence', onPress: () => onViewPress() }
        ],
        { cancelable: false }
      )
    }, 100)
  }

  render() {
    const { onViewPress, uri, touchPoints } = this.props
    const { canAddContact, canShowPoints, modalVisible, selectedItem } = this.state

    const backButtonText = canAddContact ? 'Annuler' : null

    return (
      <>
        <Modal isVisible={modalVisible} dismissModal={this.dismissModal}>
          <Picker
            title="Choisir un type"
            labels={fieldsLabels}
            data={selectedItem}
            onLabelSelect={this.updateContactState}
          />
        </Modal>
        <ImageBackground
          source={{ uri }}
          style={styles.imageBackground}
          imageStyle={styles.image}
          resizeMode="cover"
          onLoadEnd={() => this.setState({ canShowPoints: true })}
        >
          <BackButton onPress={onViewPress} text={backButtonText} />
          {canShowPoints &&
            touchPoints.map(touchPoint => (
              <TouchPoint
                key={`key-${touchPoint.position.top}`}
                data={touchPoint}
                onPress={() => this.showModal(touchPoint)}
              />
            ))}
        </ImageBackground>
        {canAddContact && (
          <ActionButton onPress={this.addContact} text="Ajouter un nouveau contact" />
        )}
      </>
    )
  }
}

export default AddContactScreen

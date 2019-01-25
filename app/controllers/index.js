import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { empty } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';


export default Controller.extend({
    // isDisabled: true,
    responseMessage: '',
  emailAddress: '',

  actualEmailAddress: computed('emailAddress', function(){
    console.log('actualEmailAddress function is called ', this.get('emailAddress'));
  }),
  emailAddressChanged: observer('emailAddress', function(){
      console.log('Observer is called', this.get('emailAddress'));
  }),

//   isValid: match('emailAddress', /^.+@.+\..+$/),
//   isDisabled: not('isValid')
// isDisabled: empty('emailAddress')
    isValid: match('emailAddress', /^.+@.+\..+$/),
     isDisabled: not('isValid'),

    actions:{
        saveInvitation(){
            alert(`Saving of the following email address is in Progress: ${this.get('emailAddress')}`);
            this.set('responseMessage', `Thank You! We have just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress');
        }
    }



});
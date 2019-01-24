import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { computed, observer } from '@ember/object';

export default Controller.extend({
    // isDisabled: true,
  emailAddress: '',

  actualEmailAddress: computed('emailAddress', function(){
    console.log('actualEmailAddress function is called ', this.get('emailAddress'));
  }),
  emailAddressChanged: observer('emailAddress', function(){
      console.log('Observer is called', this.get('emailAddress'));
  }),

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid')

});
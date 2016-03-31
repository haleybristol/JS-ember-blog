import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(comment, params){
      this.sendAction('saveComment', comment, params);
    },
    update(post, params) {
      this.sendAction('update', post, params);
    },
    delete(post) {
      if(confirm('Are you sure you want to delete Beyoncé?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});

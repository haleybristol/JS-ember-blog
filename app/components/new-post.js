import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});

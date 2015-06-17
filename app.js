window.onload = function() {
    var app = new Vue({
        el: '#app',

        data: {
            comments: [
                {author: 'John', text: 'This thing is pretty cool, keep this up!'},
                {author: 'Michael', text: 'Love what you did there, thumbs up.'},
                {author: 'Troll', text: 'This is honestly just awful, disappointed.'}
            ],

            message: '',
            author: ''
        },

        methods: {
            addComment: function(e) {
                e.preventDefault();

                if (this.message && this.author) {
                    this.comments.unshift({
                        author: this.author,
                        text: this.message
                    });

                    this.author = '';
                    this.message = '';
                }
            }
        }
    });
};

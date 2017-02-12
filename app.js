new Vue({
	el: '#events',
	data: {
		event: {
			name: '',
			description: '',
			date: ''
		},
		events: []
	},

	ready: function() {
		this.getEvents();
	},

	methods: {
		getEvents: function(eventType) {
			eventType = [{
				id: 1,
				name: 'Event',
				description: 'Event description',
				date: '2017-09-11'
			}];

			this.$set('eventType', events);
	},

		addEvent: function() {
			// console.log(this.event.description);
			if (this.event.name) {
				this.events.push(this.event);
				this.event = { name: '', description: '', date: '' };
			}

		}
	}
});
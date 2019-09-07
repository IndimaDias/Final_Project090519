var cfg = require('../config');
var Twilio = require('twilio');
var moment = require('moment');
      
'use strict';

function sendNotifications(callback) {
 
  const db = require('../models');
 
  db.Events
    .findAll()
    .then(function(events) {
      events = events.filter(function(event) {
              
            //   var searchDate = moment(new Date()).format();
            //   console.log("Search date:" + searchDate);
            //   var num =  Math.round(moment.duration(moment(event.startDate).tz(event.timeZone)
            //   .diff(searchDate)
            // ).asMinutes()) === event.remindOpt_id;

            var now = moment(new Date()); //todays date
            console.log("Now " + now);
            var end = moment(event.startDate); // another date
            console.log("End " + end);
            var duration = moment.duration(now.diff(end));
            var mins = duration.asMinutes();
            console.log("Mins "+ mins)
            return mins === event.remindOpt_id;
            
      });
      if (events.length > 0) {
        sendNotifications(events);
      }
    });

    /**
    * Send messages to all appoinment owners via Twilio
    * @param {array} events List of events.
    */
    function sendNotifications(events) {
        const client = new Twilio(cfg.twilioAccountSid, cfg.twilioAuthToken);
        events.forEach(function(event) {
            // Create options to send the message
            const options = {
                to:' +17732998783' ,
                from: cfg.twilioPhoneNumber,
                /* eslint-disable max-len */
                body: 'Hi ${event.eventName}. Just a reminder that you have an appointment coming up.',
                /* eslint-enable max-len */
            };

            // Send the message!
            client.messages.create(options, function(err, response) {
                if (err) {
                    // Just log it for now
                    console.error(err);
                } else {
                    // Log the last few digits of a phone number
                    // let masked = appointment.phoneNumber.substr(0,
                        // appointment.phoneNumber.length - 5);
                    // masked += '*****';
                    console.log('Message sent');
                }
            });
        });

        // Don't wait on success/failure, just indicate all messages have been
        // queued for delivery
        if (callback) {
          callback.call();
        }
    }
};
const sn = sendNotifications();

const notificationWorkerFactory = (sn) => {
  return {
    run: function() {
      sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();
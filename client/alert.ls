Template.connectionIndicator.helpers do
  alert_disconnected: (msg) !->
    swal do
      * title: 'Disconnected!'
        text: msg
        type: "success"

  alert_reconnected: (msg) !->
    swal do
      * title: 'Reconnected!'
        text: 'Serve reconnected.'
        type: "success"
        timer: 2000
        showConfirmButton: true

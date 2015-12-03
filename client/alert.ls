Template._alert_disconnected.onRendered !->
  swal do
    * title: __ 'disconnected'
      text: __ 'disconnected'
      type: "success"

Template._alert_reconnected.onRendered !->
  swal do
    * title: __ 'reconnected'
      text: __ 'reconnected'
      type: "success"
      timer: 2000
      showConfirmButton: true

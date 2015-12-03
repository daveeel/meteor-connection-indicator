meteor-connection-indicator
========================

An indicator ( banner or sweetalert ) that displays when meteor server is disconnected with countdown and reconnect option.


## Usage

`{{>connectionIndicator}}`  (default banner mode, best located right after the opening body tag)

`{{>connectionIndicator mode='alert'}}`  (sweetalert mode, no screen space required)

-----

Banner mode will look best with supporting packages `font-awesome` and `bootstrap-3`

![With font-awesome and bootstrap 3](images/with-fa-bs.png "With font-awesome and bootstrap 3")

Without either or both of these packages, it is still quite useful, but unstyled and plain

![Without font-awesome and bootstrap 3](images/without-fa-bs.png "Without font-awesome and bootstrap 3")

Element IDs can be used to directly style the banner if needed `#connection-lost-banner` and `#connection-try-reconnect`

----

## Customizing Banner Text

The connection banner will attempt to fetch custom text from `Meteor.settings`.  If any value is not set, the default value for that text will be used.  Below are example settings which cover all of the text in the banner.

```
{
	"public":{
		"connectionIndicator":{
			"connectionLostText":"Ooops. Something is wrong.",
			"tryReconnectText":"Try to reconnect now",
			"reconnectBeforeCountdownText":"Attempting to reconnect in",
			"reconnectAfterCountdownText":"seconds."
		}
	}
}
```
Settings are only required if you desire customized text


----

####Using with a Bootstrap Fixed Top Navbar

If you have a fixed navbar at the top of the page, the connectionIndicator will render invisibly behind it. You can use the following CSS to move the navbar down if the banner is rendered (or appear below the navbar).
```
#connection-lost-banner + .navbar-fixed-top,
#connection-try-reconnect + .navbar-fixed-top {
    top: 41px;
}
.navbar-fixed-top + #connection-lost-banner,
.navbar-fixed-top + #connection-try-reconnect {
    top: 51px;
}
```
And insert the template either directly before or after the navbar element, e.g.:
```
{{>connectionIndicator}}
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  ...
</div>
```


var app = {
    
    initialize: function () {
        this.bindEvents();
    },

    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function () {
        this.showDeviceData();
        
    },

    showDeviceData: function () {
        $("#modelo").text('Device Name: '     + device.name     + '<br />' + 
                            'Device Cordova: '  + device.cordova  + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device UUID: '     + device.uuid     + '<br />' + 
                            'Device Version: '  + device.version  + '<br />'
        );
    }

}



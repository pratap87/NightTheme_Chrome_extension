console.log("chrome extension ready to go ?")


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendRequest) {
    if (message.txt === "hello")

    {

        var element = document.body;
        element.style.background = 'black'
        element.style.color = 'white'

        var divs = document.getElementsByTagName('div');
        var atags = document.getElementsByTagName('a');
        var lis = document.getElementsByTagName('li');

        for (el of lis) {
            el.style['color'] = 'aqua'
        }
        for (el of atags) {
            el.style['color'] = '#53A6FF'

        }
        for (el of divs) {
            el.style['background-color'] = 'black'
            el.style['color'] = 'white'
        }
    }
}
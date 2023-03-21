const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
        //store the triggered events
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }

    //show prompt
    promptEvent.prompt();

    //reset the deferre dprompt variable
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clear
    window.deferredPrompt = null; 
});
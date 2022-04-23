<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//CheckoutRedirect
Route::get('/checkout', function () {
    return Inertia::render('FastCheckout');
});
//CheckoutRedirect
Route::get('/ysf', function () {
    return Inertia::render('YsfHome');
});

Route::get('/admin', function () {
    return Inertia::render('Admin');
});

Route::get('/installation', function () {
    return Inertia::render('Install');
});

Route::get('/copyrights', function () {
    return Inertia::render('Copyrights');
});

Route::get('/privacy', function () {
    return Inertia::render('Privacy');
});

Route::get('/terms', function () {
    return Inertia::render('Terms');
});

Route::get('/how-to-install-iptv-on-smart-tv', function () {
    return Inertia::render('Smarttv');
});

Route::get('/setup', function () {
    return Inertia::render('Setup');
});

Route::get('/how-to-install-iptv-on-mag-box', function () {
    return Inertia::render('Mag');
});

Route::get('/how-to-install-iptv-on-mac-os', function () {
    return Inertia::render('Mac');
});

Route::get('/how-to-install-iptv-on-windows', function () {
    return Inertia::render('Windows');
});

Route::get('/how-to-install-iptv-on-ios', function () {
    return Inertia::render('Ios');
});

Route::get('/how-to-install-iptv-on-firestick-firetv', function () {
    return Inertia::render('Firestick');
});

Route::get('/how-to-install-iptv-on-android-smart-tv', function () {
    return Inertia::render('Android');
});

//Home2
Route::get('/', function () {
    return Inertia::render('YsfHome3');
});

Route::get('/channels', function () {
    return Inertia::render('YsfChannels');
});

Route::get('/faqs', function () {
    return Inertia::render('Faq3');
});
Route::get('/pricing-plans', function () {
    return Inertia::render('Pricing3');
});

Route::get('/privacy-policy', function () {
    return Inertia::render('Privacy3');
});

Route::get('/return-and-cancellation-policy', function () {
    return Inertia::render('Cancel3');
});

Route::get('/countries', function () {
    return Inertia::render('YsfCountries2');
});

Route::get('/activatem3u', function () {
    return Inertia::render('ActivateM3u');
});

Route::get('/stripe', function () {
    return Inertia::render('Stripe');
});

Route::get('/activatemag', function () {
    return Inertia::render('ActivateMag');
});

Route::get('/payment', function () {
    return Inertia::render('Payment');
});

Route::get('/login', function () {
    return Inertia::render('Login3');
});

Route::get('/account', function () {
    return Inertia::render('YsfAccount');
});

Route::get('/viewsub', function () {
    return Inertia::render('YsfViewSub');
});

Route::get('/editchannels', function () {
    return Inertia::render('Editsub2');
});

Route::get('/logout', function () {
    return Inertia::render('Logout');
});

//Extend
Route::get('/extend', function () {
    return Inertia::render('FastCheckout');
});

Route::get('/completed', function () {
    return Inertia::render('Completed');
});

Route::get('/completeprofile', function () {
    return Inertia::render('YsfComplete');
});

Route::get('/digitalextend', function () {
    return Inertia::render('DigitalExtend');
});

Route::get('/trial', function () {
return Redirect::to('https://benegrowthagency.com/checkout/trial.php?ott');


});
Route::get('/4k', function () {
return Redirect::to('https://bit.ly/3I5OiOe');


});



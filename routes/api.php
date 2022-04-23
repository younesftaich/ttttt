<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MyUserController;
use App\Http\Controllers\MyJobController;
use App\Http\Controllers\MySubscriptionController;
use App\Models\MySubscription;
use Illuminate\Support\Facades\Http;

use App\Http\Controllers\MyM3uController;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('myusers', function() {
    return MyUserController::home();
});


Route::get('stripe/{price}/{currency}', function($price,$currency) {
    

    


$stripe = new \Stripe\StripeClient(env('STRIPE_SK'));

$res = $stripe->paymentIntents->create([
    'amount' => $price*100,
    'currency' => $currency,
    'payment_method_types' => ['card'],
  ]);
echo $res->client_secret;

});


Route::get('today', function() {
    return MySubscriptionController::today();
});
Route::get('lastmonth', function() {
    return MySubscriptionController::lastmonth();
});
Route::get('yesterday', function() {
    return MySubscriptionController::yesterday();
});


Route::get('coinbase', function() {

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.commerce.coinbase.com/checkouts/");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$post = array(
    "name" => "E currency exchange",
    "description" => "Exchange for Whatever",
    "local_price" => array(
        'amount' => '0.01',
        'currency' => 'USD'
    ),
    "pricing_type" => "fixed_price",
    "requested_info" => ["email"]
);

$post = json_encode($post);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
curl_setopt($ch, CURLOPT_POST, 1);

$headers = array();
$headers[] = "Content-Type: application/json";
$headers[] = "X-Cc-Api-Key: c79591c8-9dee-4737-a3c3-7600127892ee";
$headers[] = "X-Cc-Version: 2018-03-22";
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
curl_close ($ch);
$response = json_decode($result);

print_r  ($response->data->id );





});
Route::get('carondate', function() {
 

$myformat = 'd/m/Y H:i:s';
  $start = Carbon::now();
echo "<br>";
echo $start->format($myformat);
      $expire = $start->addDays(1);
 echo $expire->format($myformat);
echo "<br>";
echo $start->format($myformat);
echo "<br>";
$mystartdate = "21/02/2022 7:08:24"; // li kayna f database

  $date2 = Carbon::createFromFormat($myformat, $mystartdate);
echo "now: ".$start;
echo "<br>";
echo "order date: ".$date2;
	   $result = $start->gt($date2);
echo "<br>";
        if($result){
        echo "expired";
        }






});


Route::get('stripepaid/', function(Request $request) {
return MySubscriptionController::stripepaid($request->payment_intent_client_secret);
});

Route::get('userexist/{email}', function($email) {
    return MyUserController::userexist($email);
});
Route::get('deletesub/{unique}', function($unique) {
return DB::table('my_subscriptions')->where('uniqueid', $unique)->delete();

});
Route::get('img/{link}', function($link) {

$mylink = "http://logourl.net//4KOTTLOGO//AR//ISLAMIC//SAUDISUNNAH.png";

return "


<img src='$mylink'>";
;
});
Route::post('checklogin', function(Request $request) {
   
    return MyUserController::checklogin($request);
});

Route::post('profile', function(Request $request) {
   
    return MyUserController::profile($request);
});

Route::get('mysubscriptions', function() {
    return MySubscriptionController::home();
});

Route::get('parse', function() {
    return MySubscriptionController::parse();
});
Route::get('deletechannels', function() {
DB::table('channels')->truncate();


});

Route::get('countries', function() {
return DB::select('SELECT country FROM channels group by 1');

});

Route::get('getlastsubs/{page}', function($page) {

// set the number of items to display per page
$items_per_page = 10;

// build query
$offset = ($page - 1) * $items_per_page;


 $count2 = \DB::table('my_subscriptions')->count();

$alldata =  DB::select("SELECT * FROM `my_subscriptions` ORDER BY `my_subscriptions`.`id` DESC
  LIMIT " . $offset . "," . $items_per_page);

  $x = array(
        'total' => $count2,
        'subscriptions' => $alldata,
  
    );

echo json_encode((object) $x); 


});

Route::get('channelsbycountry/{country}/{page}', function($country,$page) {

// set the number of items to display per page
$items_per_page = 21;

// build query
$offset = ($page - 1) * $items_per_page;


 $count2 = \DB::table('channels')->where('country', '=', $country)->count();

$alldata =  DB::select("SELECT * FROM channels where country = '$country' LIMIT " . $offset . "," . $items_per_page );

  $x = array(
        'total' => $count2,
        'channels' => $alldata,
  
    );

echo json_encode((object) $x); 


});


Route::get('searchcountry/{country}', function($country) {

return DB::select(" SELECT country FROM channels WHERE LOWER(channels.`country`) LIKE  '%$country%' group by 1 ");




});

Route::get('searchchannel/{channel}', function($channel) {

return DB::select(" SELECT * FROM channels WHERE LOWER(channels.`channel`) LIKE  '%$channel%' group by 1 ");




});
Route::get('channelsbycountry2/{country}', function($country) {


 $count2 = \DB::table('channels')->where('country', '=', $country)->count();

$alldata =  DB::select("SELECT * FROM channels where country = '$country' " );

  $x = array(
        'total' => $count2,
        'channels' => $alldata,
  
    );

echo json_encode((object) $x); 


});

Route::get('insertchannels', function() {
$values = array('id' => 1,'channel' => 'channel','country' => 'Dayle','logo' => 'Dayle');
return DB::table('channels')->insert($values);



});

Route::get('resetpass/{email}', function($email) {
return MyUserController::resetpass( $email);
});


Route::get('killsubs', function() {


return MySubscriptionController::killsubs();
});


Route::get('jobdone/{id}', function($id) {
return MySubscriptionController::jobdone( $id);
});


Route::get('mysubscriptions/{uniqueid}', function($uniqueid) {
    return MySubscriptionController::sub($uniqueid);
});

Route::get('verify-email/{token}', function($token) {
    return MyUserController::verifyemail($token);
});

Route::post('mysubs/', function(Request $request) {
   
    return MySubscriptionController::subuser($request);
});
Route::get('emailid/{email}', function($email) {
   
    return MySubscriptionController::subuser($email);
});


Route::post('createsub', function(Request $request) {
   
    return MySubscriptionController::createsub($request);
});
Route::post('createsub2', function(Request $request) {
   
    return MySubscriptionController::createsub2($request);
});
Route::post('extend', function(Request $request) {
   
    return MySubscriptionController::extend($request);
});
Route::get('subunique/{id}', function($id) {
   
    return MySubscriptionController::sub($id);
});
Route::post('activatem3u/{id}', function(Request $request,$id) {
   
    return MySubscriptionController::activatem3u($request,$id);
});

Route::post('activatemag/{id}', function(Request $request,$id) {
   
    return MySubscriptionController::activatemag($request,$id);
});

Route::post('editm3u/{id}', function(Request $request,$id) {
   
    return MySubscriptionController::editm3u($request,$id);
});

Route::get('paidsub/{uniqueid}', function($uniqueid) {
   
    return MySubscriptionController::paidsub($uniqueid);
});
Route::get('paidextend/{uniqueid}', function($uniqueid) {
   
    return MySubscriptionController::paidextend($uniqueid);
});

Route::get('setdate', function() {
   
    return MySubscriptionController::setdate2("15/01/2023",3);
});

Route::post('extendsub/{id}', function(Request $request,$id) {
   
    return MySubscriptionController::extendsub($request,$id);
});


Route::post('createjob', function(Request $request) {
   
    return MyJobController::createjob($request);
});
Route::get('activejob', function() {
   
    return MyJobController::activejob();
});


Route::post('createuser', function(Request $request) {
   
    return MyUserController::createuser($request);
});

Route::get('myusers/{userid}', function($userid) {
   
    return MyUserController::getallsubs($userid);
});
Route::get('userexist/{email}', function($email) {
  
    return MyUserController::userexist($email);
});

Route::get('mym3us', function() {
    return MyM3uController::home();
});

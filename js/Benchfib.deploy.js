smalltalk.addPackage('Benchfib', {});
smalltalk.addClass('Benchfib', smalltalk.Object, [], 'Benchfib');

smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { result=_st((0))._tinyBenchmarks();
_st(console)._log_(_st("0 tinyBenchmarks => ").__comma(result));
return self}, function($ctx1) {$ctx1.fill(self,"main", [], smalltalk.Benchfib.klass)})}
}),
smalltalk.Benchfib.klass);


smalltalk.addMethod(
"_benchFib",
smalltalk.method({
selector: "benchFib",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self).__lt((2));
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=_st(_st(_st(_st(self).__minus((1)))._benchFib()).__plus(_st(_st(self).__minus((2)))._benchFib())).__plus((1));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"benchFib", [], smalltalk.Number)})}
}),
smalltalk.Number);

smalltalk.addMethod(
"_benchmark",
smalltalk.method({
selector: "benchmark",
fn: function (){
var self=this;
var size,flags,prime,k,count;
return smalltalk.withContext(function($ctx1) { var $1,$3,$5,$4,$2,$6;
size=(8190);
$1=self;
$2=(function(iter){
return smalltalk.withContext(function($ctx2) {count=(0);
count;
flags=_st((smalltalk.Array || Array))._new();
flags;
_st(size)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {return _st(flags)._add_(true);
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
$3=size;
$4=(function(i){
return smalltalk.withContext(function($ctx3) {$5=_st(flags)._at_(i);
if(smalltalk.assert($5)){
prime=_st(i).__plus((1));
prime;
k=_st(i).__plus(prime);
k;
_st((function(){
return smalltalk.withContext(function($ctx4) {return _st(k).__lt_eq(size);
}, function($ctx4) {$ctx4.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx4) {_st(flags)._at_put_(k,false);
k=_st(k).__plus(prime);
return k;
}, function($ctx4) {$ctx4.fill(null, null, {})})}));
count=_st(count).__plus((1));
return count;
};
}, function($ctx3) {$ctx3.fill(null, null, {})})});
return _st((1))._to_do_($3,$4);
}, function($ctx2) {$ctx2.fill(null, null, {})})});
_st((1))._to_do_($1,$2);
$6=count;
return $6;
}, function($ctx1) {$ctx1.fill(self,"benchmark", [], smalltalk.Number)})}
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchFib",
smalltalk.method({
selector: "jsbenchFib",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;};
return self}, function($ctx1) {$ctx1.fill(self,"jsbenchFib", [], smalltalk.Number)})}
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchmark",
smalltalk.method({
selector: "jsbenchmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var size = 8190;
var count;
for (var z=0;z<this;z++) {
  count = 0;
  var flags = new Array();
  for (var p=0; p<size; p++) {
    flags[p] = true;
  }
  for (var i=1;i<=size;i++) {
    if (flags[i-1]) {
      var prime = i+1;
      var k = i + prime;
      while (k <= size) {
        flags[k-1] = false;
        k = k + prime;
      }
      count = count + 1;
    }
  }
}
return count;
return self}, function($ctx1) {$ctx1.fill(self,"jsbenchmark", [], smalltalk.Number)})}
}),
smalltalk.Number);

smalltalk.addMethod(
"_jstinyBenchmarks",
smalltalk.method({
selector: "jstinyBenchmarks",
fn: function (){
var self=this;
var t1,t2,r,n1,n2;
return smalltalk.withContext(function($ctx1) { var $1;
n1=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {t1=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {return _st(n1)._jsbenchmark();
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
t1;
return _st(t1).__lt((1000));
}, function($ctx2) {$ctx2.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {n1=_st(n1).__star((2));
return n1;
}, function($ctx2) {$ctx2.fill(null, null, {})})}));
n2=(28);
_st((function(){
return smalltalk.withContext(function($ctx2) {t2=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {r=_st(n2)._jsbenchFib();
return r;
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
t2;
return _st(t2).__lt((1000));
}, function($ctx2) {$ctx2.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {n2=_st(n2).__plus((1));
return n2;
}, function($ctx2) {$ctx2.fill(null, null, {})})}));
$1=_st(_st(_st(_st(_st(_st(_st(n1).__star((500000))).__star((1000))).__slash(t1))._printString()).__comma(" bytecodes/sec; ")).__comma(_st(_st(_st(r).__star((1000))).__slash(t2))._printString())).__comma(" sends/sec");
return $1;
}, function($ctx1) {$ctx1.fill(self,"jstinyBenchmarks", [], smalltalk.Number)})}
}),
smalltalk.Number);

smalltalk.addMethod(
"_tinyBenchmarks",
smalltalk.method({
selector: "tinyBenchmarks",
fn: function (){
var self=this;
var t1,t2,r,n1,n2;
return smalltalk.withContext(function($ctx1) { var $1;
n1=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {t1=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {return _st(n1)._benchmark();
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
t1;
return _st(t1).__lt((1000));
}, function($ctx2) {$ctx2.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {n1=_st(n1).__star((2));
return n1;
}, function($ctx2) {$ctx2.fill(null, null, {})})}));
n2=(16);
_st((function(){
return smalltalk.withContext(function($ctx2) {t2=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {r=_st(n2)._benchFib();
return r;
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
t2;
return _st(t2).__lt((1000));
}, function($ctx2) {$ctx2.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {n2=_st(n2).__plus((1));
return n2;
}, function($ctx2) {$ctx2.fill(null, null, {})})}));
$1=_st(_st(_st(_st(_st(_st(_st(n1).__star((500000))).__star((1000))).__slash(t1))._printString()).__comma(" bytecodes/sec; ")).__comma(_st(_st(_st(r).__star((1000))).__slash(t2))._printString())).__comma(" sends/sec");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tinyBenchmarks", [], smalltalk.Number)})}
}),
smalltalk.Number);


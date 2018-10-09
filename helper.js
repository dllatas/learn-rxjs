const rx = require('rxjs');

rx.Observable.of(1,2,3).map(x => x + 1).subscribe(x => console.log(x));


rx.Observable.of('hello world').subscribe(x => console.log(x));

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const clock = new Observable(suscriber => {
  console.log('In Observable');
  const interval = setInterval(() => {
    suscriber.next('tick');
  }, 1000);
  return () => {
    console.log('Unsuscribe Observable')
    clearInterval(interval)
  }
});


const subscription = clock
  .pipe(
    map((val, index) => val.split("").reverse().join(""))
  )
  .subscribe(
    response => console.log(response), // next()
    error => console.log(error), // error()
    () => {
      console.log('Complete Observable 2') // complete()
    }
  );

setTimeout(() => subscription.unsubscribe(), 10 * 1000);
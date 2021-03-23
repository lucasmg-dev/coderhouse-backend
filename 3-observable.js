import { Observable } from 'rxjs';

const clock = new Observable(suscriber => {
  console.log('In Observable');
  
  const interval = setInterval(() => {
    suscriber.next('tick');
  }, 1000);

  // suscribe.error()
  
  // setTimeout(() => {
  //   suscriber.complete()
  // }, 5000)
  
  return () => { // unsubscribe
    console.log('Unsuscribe Observable')
    clearInterval(interval)
  }
});

const subscription = clock.subscribe(
  response => console.log(response), // next()
  error => console.log(error), // error()
  () => {
    console.log('Complete Observable') // complete()
  }
);

setTimeout(() => subscription.unsubscribe(), 10 * 1000);
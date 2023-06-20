import { Component, OnInit,OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { Subscription,Observable } from 'rxjs'

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit,OnDestroy {
  constructor(private store: Store<{ counter: CounterModel }>) {

  }
  
  counterdisplay!: number;
  channelname = '';
  countersubscribe !: Subscription;
  counter$ !:Observable<CounterModel>;
  ngOnInit(): void {
    // this.countersubscribe = this.store.select('counter').subscribe(data => {
    //   this.counterdisplay = data.counter;
    //   this.channelname = data.channelname;
    // });

    this.counter$=this.store.select('counter');
  }

  ngOnDestroy(): void {
    // if(this.countersubscribe){
    //   this.countersubscribe.unsubscribe();
    // }
  }

}

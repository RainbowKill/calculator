import { Counter } from 'prom-client';
import { Injectable } from "@nestjs/common";

@Injectable()
export class MetricsService {

  private counter = new Counter({
    name: 'calculator_metric',
    help: 'number of calculator operations'
  })

  incrementCalculatorOperation() {
    this.counter.inc()
  }
}
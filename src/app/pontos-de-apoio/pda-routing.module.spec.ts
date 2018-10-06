import { PdaRoutingModule } from './pda-routing.module';

describe('PdaRoutingModule', () => {
  let pdaRoutingModule: PdaRoutingModule;

  beforeEach(() => {
    pdaRoutingModule = new PdaRoutingModule();
  });

  it('should create an instance', () => {
    expect(pdaRoutingModule).toBeTruthy();
  });
});

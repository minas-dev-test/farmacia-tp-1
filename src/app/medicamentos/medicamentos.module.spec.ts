import { MedicamentosModule } from './medicamentos.module';

describe('MedicamentosModule', () => {
  let medicamentosModule: MedicamentosModule;

  beforeEach(() => {
    medicamentosModule = new MedicamentosModule();
  });

  it('should create an instance', () => {
    expect(medicamentosModule).toBeTruthy();
  });
});

import { PontosDeApoioModule } from './pontos-de-apoio.module';

describe('PontosDeApoioModule', () => {
  let pontosDeApoioModule: PontosDeApoioModule;

  beforeEach(() => {
    pontosDeApoioModule = new PontosDeApoioModule();
  });

  it('should create an instance', () => {
    expect(pontosDeApoioModule).toBeTruthy();
  });
});

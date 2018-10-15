import { NoticiasRoutingModule } from './noticias-routing.module';

describe('NoticiasRoutingModule', () => {
  let noticiasRoutingModule: NoticiasRoutingModule;

  beforeEach(() => {
    noticiasRoutingModule = new NoticiasRoutingModule();
  });

  it('should create an instance', () => {
    expect(noticiasRoutingModule).toBeTruthy();
  });
});

// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/app';

const request = supertest(app);

const testNom1 = 'Jean-Marc';
const testNom2 = 'Pierre';

beforeAll(async () => {
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
});


describe('GET /api/v1/jeu/redemarrerJeu', () => {
  
  it("devrait vérifier le succès de la requête pour redémarrer le jeu", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
  });

  it("devrait vérifier qu'il n'y a plus de joeurs", async () => {
    await request.get('/api/v1/jeu/redemarrerJeu');
    const response = await request.get('/api/v1/jeu/jouer/' + testNom1);
    expect(response.status).toBe(404);
  });

  

});   

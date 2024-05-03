const request = require ('supertest');

describe('Star Wars API tests', () => {
    it('should get all available resources within the API', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('');
        const body = response.body;

        expect(response.status).toBe(200);
        expect(body.people).toBe('https://swapi.py4e.com/api/people/');
        expect(body.films).toBe('https://swapi.py4e.com/api/films/');
        expect(body.starships).toBe('https://swapi.py4e.com/api/starships/');
    });

    it('should get a valid starship', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('starships/9/');
        const body = response.body;

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(body.name).toBe('Death Star');
        expect(body.model).toBe('DS-1 Orbital Battle Station');
        expect(body.manufacturer).toBe('Imperial Department of Military Research, Sienar Fleet Systems');
        expect(body.cost_in_credits).toBe('1000000000000');
        expect(body.length).toBe('120000');
        expect(body.max_atmosphering_speed).toBe('n/a');
        expect(body.crew).toBe('342,953');
        expect(body.passengers).toBe('843,342');
        expect(body.cargo_capacity).toBe('1000000000000');
        expect(body.consumables).toBe('3 years');
        expect(body.hyperdrive_rating).toBe('4.0');
        expect(body.MGLT).toBe('10');
        expect(body.starship_class).toBe('Deep Space Mobile Battlestation');
        expect(body.pilots).toBeDefined();
        expect(body.films).toContain('https://swapi.py4e.com/api/films/1/');
    });
    
    it('should get a invalid starship', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('starships/0918100/');
        const body = response.body;

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(body.detail).toBe("Not found");
    });

    it('should get a valid people', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('people/1/');
        const body = response.body;

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(body.name).toBe('Luke Skywalker');
        expect(body.height).toBe('172');
        expect(body.mass).toBe('77');
        expect(body.hair_color).toBe('blond');
        expect(body.skin_color).toBe('fair');
        expect(body.eye_color).toBe('blue');
        expect(body.birth_year).toBe('19BBY');
        expect(body.gender).toBe('male');
        expect(body.homeworld).toBe('https://swapi.py4e.com/api/planets/1/');
        expect(body.films).toContain('https://swapi.py4e.com/api/films/1/');
        expect(body.species).toContain('https://swapi.py4e.com/api/species/1/');
        expect(body.vehicles).toContain('https://swapi.py4e.com/api/vehicles/14/');
        expect(body.starships).toContain('https://swapi.py4e.com/api/starships/12/');
    });

    it('should get a invalid people', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('people/0918100/');
        const body = response.body;

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(body.detail).toBe("Not found");
    });

    it('should get a valid film', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('films/2/');
        const body = response.body;

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(body.title).toBe('The Empire Strikes Back');
        expect(body.episode_id).toBe(5);
        expect(body.director).toBe('Irvin Kershner');
        expect(body.producer).toBe('Gary Kurtz, Rick McCallum');
        expect(body.release_date).toBe('1980-05-17');
        expect(body.characters).toContain('https://swapi.py4e.com/api/people/1/');
        expect(body.starships).toContain('https://swapi.py4e.com/api/starships/15/');
        expect(body.planets).toContain('https://swapi.py4e.com/api/planets/4/');
        expect(body.species).toContain('https://swapi.py4e.com/api/species/1/');
        expect(body.vehicles).toContain('https://swapi.py4e.com/api/vehicles/8/');
    });

    it('should get a invalid film', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('films/0918100/');
        const body = response.body;

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(body.detail).toBe("Not found");
    });

    it('should get a valid vehicle', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('vehicles/4/');
        const body = response.body;

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(body.name).toBe('Sand Crawler');
        expect(body.model).toBe('Digger Crawler');
        expect(body.manufacturer).toBe('Corellia Mining Corporation');
        expect(body.cost_in_credits).toBe('150000');
        expect(body.length).toBe('36.8 ');
        expect(body.max_atmosphering_speed).toBe('30');
        expect(body.crew).toBe('46');
        expect(body.passengers).toBe('30');
        expect(body.cargo_capacity).toBe('50000');
        expect(body.consumables).toBe('2 months');
        expect(body.vehicle_class).toBe('wheeled');
        expect(body.pilots).toBeDefined();
        expect(body.films).toContain('https://swapi.py4e.com/api/films/5/');
    });

    it('should get a invalid vehicle', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('vehicles/0918100/');
        const body = response.body;

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(body.detail).toBe("Not found");
    });

    it('should get a valid planet', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('planets/1/');
        const body = response.body;

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(body.name).toBe('Tatooine');
        expect(body.rotation_period).toBe('23');
        expect(body.orbital_period).toBe('304');
        expect(body.diameter).toBe('10465');
        expect(body.climate).toBe('arid');
        expect(body.gravity).toBe('1 standard');
        expect(body.terrain).toBe('desert');
        expect(body.surface_water).toBe('1');
        expect(body.population).toBe('200000');
        expect(body.residents).toContain('https://swapi.py4e.com/api/people/1/');
        expect(body.films).toContain('https://swapi.py4e.com/api/films/1/');
    });

    it('should get a invalid planet', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('planets/0918100/');
        const body = response.body;

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(body.detail).toBe("Not found");
    });

    it('should get a valid species', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('species/3/');
        const body = response.body;
        
        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(body.name).toBe('Wookiee');
        expect(body.classification).toBe('mammal');
        expect(body.designation).toBe('sentient');
        expect(body.average_height).toBe('210');
        expect(body.average_lifespan).toBe('400');
        expect(body.eye_colors).toBe('blue, green, yellow, brown, golden, red');
        expect(body.hair_colors).toBe('black, brown');
    });

    it('should get a invalid species', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('species/0918100/');
        const body = response.body;

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(body.detail).toBe("Not found");
    });
});
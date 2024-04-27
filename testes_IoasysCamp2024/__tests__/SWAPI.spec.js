const request = require ('supertest');

describe('Star Wars API tests', () => {
    it('should get all available resources within the API', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('');

        expect(response.status).toBe(200);
        expect(response.body.people).toBe('https://swapi.py4e.com/api/people/');
        expect(response.body.films).toBe('https://swapi.py4e.com/api/films/');
        expect(response.body.starships).toBe('https://swapi.py4e.com/api/starships/');
    });

    it('should get a valid starship', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('starships/9/');

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Death Star');
        expect(response.body.model).toBe('DS-1 Orbital Battle Station');
        expect(response.body.manufacturer).toBe('Imperial Department of Military Research, Sienar Fleet Systems');
        expect(response.body.cost_in_credits).toBe('1000000000000');
        expect(response.body.length).toBe('120000');
        expect(response.body.max_atmosphering_speed).toBe('n/a');
        expect(response.body.crew).toBe('342,953');
        expect(response.body.passengers).toBe('843,342');
        expect(response.body.cargo_capacity).toBe('1000000000000');
        expect(response.body.consumables).toBe('3 years');
        expect(response.body.hyperdrive_rating).toBe('4.0');
        expect(response.body.MGLT).toBe('10');
        expect(response.body.starship_class).toBe('Deep Space Mobile Battlestation');
        expect(response.body.pilots).toBeDefined();
        expect(response.body.films).toContain('https://swapi.py4e.com/api/films/1/');
    });
    
    it('should get a invalid starship', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('starships/0918100/');

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(response.body.detail).toBe("Not found");
    });

    it('should get a valid people', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('people/1/');

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Luke Skywalker');
        expect(response.body.height).toBe('172');
        expect(response.body.mass).toBe('77');
        expect(response.body.hair_color).toBe('blond');
        expect(response.body.skin_color).toBe('fair');
        expect(response.body.eye_color).toBe('blue');
        expect(response.body.birth_year).toBe('19BBY');
        expect(response.body.gender).toBe('male');
        expect(response.body.homeworld).toBe('https://swapi.py4e.com/api/planets/1/');
        expect(response.body.films).toContain('https://swapi.py4e.com/api/films/1/');
        expect(response.body.species).toContain('https://swapi.py4e.com/api/species/1/');
        expect(response.body.vehicles).toContain('https://swapi.py4e.com/api/vehicles/14/');
        expect(response.body.starships).toContain('https://swapi.py4e.com/api/starships/12/');
    });

    it('should get a invalid people', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('people/0918100/');

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(response.body.detail).toBe("Not found");
    });

    it('should get a valid film', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('films/2/');

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('The Empire Strikes Back');
        expect(response.body.episode_id).toBe(5);
        expect(response.body.director).toBe('Irvin Kershner');
        expect(response.body.producer).toBe('Gary Kurtz, Rick McCallum');
        expect(response.body.release_date).toBe('1980-05-17');
        expect(response.body.characters).toContain('https://swapi.py4e.com/api/people/1/');
        expect(response.body.starships).toContain('https://swapi.py4e.com/api/starships/15/');
        expect(response.body.planets).toContain('https://swapi.py4e.com/api/planets/4/');
        expect(response.body.species).toContain('https://swapi.py4e.com/api/species/1/');
        expect(response.body.vehicles).toContain('https://swapi.py4e.com/api/vehicles/8/');
    });

    it('should get a invalid film', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('films/0918100/');

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(response.body.detail).toBe("Not found");
    });

    it('should get a valid vehicle', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('vehicles/4/');

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Sand Crawler');
        expect(response.body.model).toBe('Digger Crawler');
        expect(response.body.manufacturer).toBe('Corellia Mining Corporation');
        expect(response.body.cost_in_credits).toBe('150000');
        expect(response.body.length).toBe('36.8 ');
        expect(response.body.max_atmosphering_speed).toBe('30');
        expect(response.body.crew).toBe('46');
        expect(response.body.passengers).toBe('30');
        expect(response.body.cargo_capacity).toBe('50000');
        expect(response.body.consumables).toBe('2 months');
        expect(response.body.vehicle_class).toBe('wheeled');
        expect(response.body.pilots).toBeDefined();
        expect(response.body.films).toContain('https://swapi.py4e.com/api/films/5/');
    });

    it('should get a invalid vehicle', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('vehicles/0918100/');

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(response.body.detail).toBe("Not found");
    });

    it('should get a valid planet', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('planets/1/');

        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Tatooine');
        expect(response.body.rotation_period).toBe('23');
        expect(response.body.orbital_period).toBe('304');
        expect(response.body.diameter).toBe('10465');
        expect(response.body.climate).toBe('arid');
        expect(response.body.gravity).toBe('1 standard');
        expect(response.body.terrain).toBe('desert');
        expect(response.body.surface_water).toBe('1');
        expect(response.body.population).toBe('200000');
        expect(response.body.residents).toContain('https://swapi.py4e.com/api/people/1/');
        expect(response.body.films).toContain('https://swapi.py4e.com/api/films/1/');
    });

    it('should get a invalid planet', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('planets/0918100/');

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(response.body.detail).toBe("Not found");
    });

    it('should get a valid species', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('species/3/');
        
        expect(response.type).toBe('application/json');
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Wookiee');
        expect(response.body.classification).toBe('mammal');
        expect(response.body.designation).toBe('sentient');
        expect(response.body.average_height).toBe('210');
        expect(response.body.average_lifespan).toBe('400');
        expect(response.body.eye_colors).toBe('blue, green, yellow, brown, golden, red');
        expect(response.body.hair_colors).toBe('black, brown');
    });

    it('should get a invalid species', async () => {
        const response = await request('https://swapi.py4e.com/api/').get('species/0918100/');

        expect(response.error).toBeTruthy();
        expect(response.status).toBe(404);
        expect(response.body.detail).toBe("Not found");
    });
});
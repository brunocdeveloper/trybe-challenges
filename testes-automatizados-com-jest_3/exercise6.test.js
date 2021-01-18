function dogPictures() {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()
    .then(json => response.ok ? Promise.resolve(json): Promise.reject(json)))
}

describe('Testando o retorno da requisição', () => {
    it('Testando requisição caso a promisse resolva', async () => {
        dogPictures = jest.fn();
    
        dogPictures.mockResolvedValue('request sucess');
    
        dogPictures();
        expect(dogPictures).toHaveBeenCalled();
        expect(dogPictures).toHaveBeenCalledTimes(1);
        expect(dogPictures()).resolves.toBe('request sucess');
        expect(dogPictures).toHaveBeenCalledTimes(2);
    });
    
    it('Testando requisição caso a promisse seja rejeitada', async () => {
        dogPictures = jest.fn();
        dogPictures.mockRejectedValue('request failed');
    
        expect(dogPictures).toHaveBeenCalledTimes(0);
        expect(dogPictures()).rejects.toMatch('request failed');
        expect(dogPictures).toHaveBeenCalledTimes(1);    
    });
})


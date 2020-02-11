import { getAreas } from './apiCalls.js';

describe('getAreas', () => {
  let mockResponse = {
    "areas": [
      {
        "area": "RiNo",
        "details": "/api/v1/areas/590"
      },
      {
        "area": "Park Hill",
        "details": "/api/v1/areas/751"
      }
    ]
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    });
  });

  it('should call fetch with the correct url', () => {
    getAreas();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas');
  });

  it('should return a resolved promise when response is okay', () => {
    expect(getAreas()).resolves.toEqual(mockResponse);
  });

  it('should return a thrown error promise when response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockResponse)
      });
    });

    expect(getAreas()).rejects.toThrow(Error('Error! No 200 Status Code Found.'));
  });

  it('should return a resolved promise when response is okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Error! No 200 Status Code Found."));
    });

    expect(getAreas()).rejects.toEqual(Error('Error! No 200 Status Code Found.'));
  });
});

// describe('getAreas', () => {
//
// });

import { getAreas, getListing } from './apiCalls.js';

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

  it('should return a thrown error when response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockResponse)
      });
    });

    expect(getAreas()).rejects.toThrow(Error('Error! No 200 Status Code Found.'));
  });

  it('should return an error if promise is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Error! No 200 Status Code Found."));
    });

    expect(getAreas()).rejects.toEqual(Error('Error! No 200 Status Code Found.'));
  });
});

describe('getListing', () => {
  const listing = '/api/v1/listings/3';
  let mockResponse = {
    "listing_id": 3,
    "area_id": 590,
    "name": "Hip RiNo Party Spot",
    "address": {
      "street": "2250 Lawrence St",
      "zip": "80205"
    },
    "details": {
      "neighborhood_id": 5124122,
      "superhost": true,
      "seller_source": "91jss1",
      "beds": 3,
      "baths": 2.5,
      "cost_per_night": 420,
      "features": [
        "hot tub",
        "espresso machine"
      ]
    },
    "dev_id": "u4gh2j",
    "area": "rino",
    "db_connect": 834470
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
    getListing(listing);
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/listings/3');
  });

  it('should return a resolved promise when response is okay', () => {
    expect(getListing(listing)).resolves.toEqual(mockResponse);
  });

  it('should return a thrown error when response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockResponse)
      });
    });

    expect(getListing(listing)).rejects.toThrow(Error('Error! No 200 Status Code Found.'));
  });

  it('should return an error if promise is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Error! No 200 Status Code Found."));
    });

    expect(getListing(listing)).rejects.toEqual(Error('Error! No 200 Status Code Found.'));
  });
});

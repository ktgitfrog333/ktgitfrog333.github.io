// __mocks__/localStorage.js
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
    removeItem: jest.fn(),
};

if (typeof localStorage === 'undefined') {
    global.localStorage = localStorageMock;
}

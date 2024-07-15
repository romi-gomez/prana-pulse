// jest.setup.js
global.TextDecoder = class {
    decode() {
      return "decoded text";
    }
  };
  
  global.TextEncoder = class {
    encode() {
      return new Uint8Array();
    }
  };

  
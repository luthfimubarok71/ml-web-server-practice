const Hapi = require('@hapi/hapi');
const { loadModel, predict } = require('./inference');

(async () => {

  // Load and Get Machine Learning Model
  const model = await loadModel();
  console.log('Model Loaded!');

  // inisiasi Server
  const server = Hapi.server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost': '0.0.0.0',
    port: 3000,
    });

  server.route({
    method: 'POST',
    path: '/predicts',
    handler: async (request) => {
      // get image that uploaded by user
      const { image } = request.payload;
      // do and get prediction result by giving model and image
      const predictions = await predict(model, image);
      // get prediction result
      const [paper, rock] = predictions;

      if (paper) {
        return { result: 'paper' };
      }

      if (rock) {
        return { result: 'rock' };
      }
      
      return { result: 'scissor' };
    },
    // make request payload as `multipart/form-data` to accept file upload
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
      }
    }
  });

  // runnning server
  await server.start();
  console.log('Server running on %s', server.info.uri);
})();
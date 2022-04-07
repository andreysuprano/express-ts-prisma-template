import { ExpressServer } from "./src/Aplication/Server/ExpressServer";

const PORT = process.env.PORT || 2000;
const _expressServer = new ExpressServer();

_expressServer.server.listen(PORT, () => console.log('Server is Runing on port:', PORT));

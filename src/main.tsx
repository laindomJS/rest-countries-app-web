import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/800.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
    <ChakraProvider theme={theme}>
		 <RouterProvider router={router} />
    </ChakraProvider>
	</React.StrictMode>
)

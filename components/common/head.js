import React from 'react';

export default function CustomHead() {
	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
          (function() {
            const theme = localStorage.getItem('theme') || 'business';
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
				}}
			/>
		</>
	);
}



test ( 'Debe ser true', () => {
    const isActive = true;
    if ( isActive ) {
        throw new Error('No está activo')
    }
} )
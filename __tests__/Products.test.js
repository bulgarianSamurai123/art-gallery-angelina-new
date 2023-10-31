import {render, screen} from '@testing-library/react'
import ProductPage from '../pages/products'

describe('Products page', () => {
    test('should fetch products', async () => {
        // ARRANGE
        render(<ProductPage />)
    })
})
import { Product } from '../model/product';
import { ProductsFilterPipe } from './products-filter.pipe';

fdescribe('ProductsFilterPipe', () => {

  it('create an instance', () => {

    const pipe = new ProductsFilterPipe();
    expect(pipe).toBeTruthy(); // Not null

  });

  it("should return the input as the output when no search key", () => {

    const pipe = new ProductsFilterPipe();
    const input = [new Product(1, "P1", 1000, "D1"), 
                        new Product(2, "P2", 2000, "D2"), new Product(3, "P3", 3000, "D3")]
    const result = pipe.transform(input, "");

    expect(result).toBe(input);

  })

  it("should return the input as the filtered output with a search key", () => {

    const pipe = new ProductsFilterPipe();
    const input = [new Product(1, "P1", 1000, "D1"), 
                        new Product(2, "P2", 2000, "D2"), new Product(3, "P3", 3000, "D3")]
    const result = pipe.transform(input, "3");

    expect(result.length).toBe(1);
    expect(result).toContain(new Product(3, "P3", 3000, "D3"));

  })


});

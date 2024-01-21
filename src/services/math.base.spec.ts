import { add, divide } from "./math.service";

describe("add", () => {
  it("should return 15 when add 5 to 10", () => {
    const result = add(10, 5);

    expect(result).toBe(15);
  });

  it("should return -1 when add -3 to 2", () => {
    const result = add(2, -3);

    expect(result).toBe(-1);
  });

  it("should return 0 when add 0 to 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  it("should return 0 when add 0 to 0", () => {
    // Arrange
    // empty
    
    // Act
    const result = add(0, 0);

    // Assert
    expect(result).toBe(0);
  });

  it("should return 2 when divide 4 by 2", () => {
    const result = divide(4, 2);

    expect(result).toBe(2);
  });
});
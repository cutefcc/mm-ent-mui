describe('加法函数的测试', function () {
    it("1加1 应该 === 2", function () {
        expect(addOne(1)).toBe(2);
    });
    it("1加2 应该 === 3", function () {
        expect(addTwo(1)).toBe(4);
    });
});

it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 15000,
    years: 5,
    rate: 3.45
  };
  expect(calculateMonthlyPayment(values)).toEqual('272.54');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

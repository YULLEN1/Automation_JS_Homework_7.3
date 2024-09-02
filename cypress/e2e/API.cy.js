describe("API tests for user in a petstore", () => {
    const username = "yullen";
  it("Add user", () => {
    cy.request({
      method: "POST",
      url: "/user",
      body: {
        id: 123,
        username: username,
        firstName: "Yulia",
        lastName: "Lener",
        email: "yuliya_lener@yandex.ru",
        password: "TYUNO67tyui",
        phone: "+79999999999",
        userStatus: 1,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Update user", () => {
    cy.request({
      method: "PUT",
      url: `/user/${username}`,
      body: {
        id: 123,
        username: username,
        firstName: "Yulia",
        lastName: "Ivanova",
        email: "yuliya_lener@yandex.ru",
        password: "TYUNO67tyui",
        phone: "+79999999999",
        userStatus: 0,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Delete user", () => {
    cy.request({
      method: "DELETE",
      url: `/user/${username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

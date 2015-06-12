Template.table.helpers({
  guests: function () {
    return Guests.find({ table: this.number });
  },
  guestsCount: function () {
    return Guests.find({ table: this.number }).count();
  },
  seatsCount: function () {
    return this.seats.length;
  },
  available: function () {
    return this.seats.length - Guests.find({ table: this.number }).count();
  },
  canReserve: function () {
    // if (!Session.get("guestID")) {
    //   throw new Meteor.Error("not-authorized");
    // }
    return this.seats.length - Guests.find({ table: this.number }).count() != 0;
  }
});

Template.table.events({
  "click .reservar .btn": function (event) {
    Guests.update(Session.get("guestId"), { $set: { table: this.number} })
  }
});

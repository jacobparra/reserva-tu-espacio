Template.body.helpers({
  tables: function () {
    return Tables.find({});
  },
  guestId: function () {
    return Session.get("guestId");
  },
  guestHasntPaid: function () {
    return Session.get("guestHasntPaid");
  }
});


Template.body.events({
  "submit .rut-search": function (event) {
    var rut = event.target.rut.value;

    var guest = Guests.findOne({rut: rut});

    if (guest.paid) {
      Session.set("guestId", guest._id);
      Session.set("guestHasntPaid", false);
    } else {
      Session.set("guestHasntPaid", true);
    }

    return false;
  }
});


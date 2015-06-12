Template.admin.helpers({
  guests: function () {
    return Guests.find({});
  }
});


Template.admin.events({
  "submit form": function (event) {

    Guests.insert({
      fullname: event.target.fullname.value,
      gen: event.target.gen.value,
      rut: event.target.rut.value,
      paid: event.target.paid.checked,
      paymentMethod: event.target.paymentMethod.value,
      paymentDate: event.target.paymentDate.value
    });

    event.target.fullname.value = "";
    event.target.gen.value = "";
    event.target.rut.value = "";
    event.target.paid.checked = false;
    event.target.paymentMethod.value = "";
    event.target.paymentDate.value = "";

    return false;
  }

});

Template.adminGuest.events({
  "click .delete": function () {
    Guests.remove(this._id);
  },
});

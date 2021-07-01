function bakeCake(whenCakeDone) {
    whenCakeDone();
}

bakeCake(function() {
    console.log("hi!");
});

bakeCake(() => console.log("hi!")); // denna gör samma sak som den övre
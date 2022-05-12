function getAcceleration(obj) {
    if (obj.m && obj.f) {
        return obj.f / obj.m;
    }
    else if (obj.Δv && obj.Δt) {
        return obj.Δv / obj.Δt
    }
    else if (obj.d && obj.t) {
        return 2 * obj.d / Math.pow(obj.t, 2);
    }
    else {
        return 'impossible'
    }

}
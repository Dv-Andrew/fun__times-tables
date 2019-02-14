/**
 * A class to describe a two or three dimensional vector, specifically
 * a Euclidean (also known as geometric) vector. A vector is an entity
 * that has both magnitude and direction. The datatype, however, stores
 * the components of the vector (x, y for 2D, and x, y, z for 3D). The magnitude
 * and direction can be accessed via the methods mag() and heading().
 * 
 * Prototype for this code is p5.Vector.js: https://github.com/processing/p5.js
 * 
 * @class Vector
 * @param {Number} [x] x component of the vector
 * @param {Number} [y] y component of the vector
 * @param {Number} [z] z component of the vector
 */
export class Vector {
  private _x: number;
  private _y: number;
  private _z: number;

  constructor(x: Vector);
  constructor(x: number[]);
  constructor(x: number[][]);
  constructor(x: number, y: number, z?: number);
  constructor(x: any, y?: any, z?: any) {
    if (x instanceof Vector) {
      this._x = x._x || 0;
      this._y = x._y || 0;
      this._z = x._z || 0;
    }
    else if (x instanceof Array) {
      if (x[0] instanceof Array) {

        if (x[0]) this._x = x[0][0]; else this._x = 0;
        if (x[1]) this._y = x[1][0]; else this._y = 0;
        if (x[2]) this._z = x[2][0]; else this._z = 0;

      } else {
        this._x = x[0] || 0;
        this._y = x[1] || 0;
        this._z = x[2] || 0;
      }
    }
    else if (typeof(x) == 'number') {
      this._x = x || 0;
      this._y = y || 0;
      this._z = z || 0;
    }
  }

/**
 * Return current value of Vector._x
 * @method getX
 * @return number
 */
  getX():number {
    return this._x;
  }
/**
 * Return current value of Vector._y
 * @method getY
 * @return number
 */
  getY():number {
    return this._y;
  }
/**
 * Return current value of Vector._z
 * @method getZ
 * @return number
 */
  getZ():number {
    return this._z;
  }

/**
 * Sets the x, y, and z component of the vector using two or three separate
 * variables, the data from a Vector, the values from a array, or 2 dimensional array.
 * 
 * @method set
 * @chainable
 * @return Vector
 */
  set(x: Vector): Vector;
  set(x: number[]): Vector;
  set(x: number[][]): Vector;
  set(x: number, y: number, z?: number): Vector;
  set(x: any, y?: any, z?: any) {
    if (x instanceof Vector) {
      this._x = x._x || 0;
      this._y = x._y || 0;
      this._z = x._z || 0;
      return this;
    }
    else if (x instanceof Array) {
      if (x[0] instanceof Array) {

        if (x[0]) this._x = x[0][0]; else this._x = 0;
        if (x[1]) this._y = x[1][0]; else this._y = 0;
        if (x[2]) this._z = x[2][0]; else this._z = 0;
        return this;

      } else {
        this._x = x[0] || 0;
        this._y = x[1] || 0;
        this._z = x[2] || 0;
        return this;
      }
    }
    else if (typeof(x) === 'number') {
      this._x = x || 0;
      this._y = y || 0;
      this._z = z || 0;
      return this;
    }
  }

/**
 * Gets a copy of the vector, return a Vector object.
 * 
 * @method copy
 * @return Vector
 */
  copy(): Vector {
    return new Vector(this._x, this._y, this._z);
  }

/**
  * Adds x, y, and z components to a vector, adds one vector to another, or
  * adds two independent vectors together. The version of the method that adds
  * two vectors together is a static method and return a Vector, the others
  * acts directly on the vector.
  *
  * @method add
  * @chainable
  * @return Vector
  */
  add(x: Vector): Vector;
  add(x: number[]): Vector;
  add(x: number[][]): Vector;
  add(x: number, y: number, z?: number): Vector;
  add(x: any, y?: any, z?: any) {
    if (x instanceof Vector) {
      this._x += x._x || 0;
      this._y += x._y || 0;
      this._z += x._z || 0;
      return this;
    }
    else if (x instanceof Array) {
      if (x[0] instanceof Array) {

        if (x[0]) this._x += x[0][0]; else this._x += 0;
        if (x[1]) this._y += x[1][0]; else this._y += 0;
        if (x[2]) this._z += x[2][0]; else this._z += 0;
        return this;

      } else {
        this._x += x[0] || 0;
        this._y += x[1] || 0;
        this._z += x[2] || 0;
        return this;
      }
    }
    else if (typeof(x) === 'number') {
      this._x += x || 0;
      this._y += y || 0;
      this._z += z || 0;
      return this;
    }
  }

/**
 * Subtracts x, y, and z components from a vector, subtracts one vector from
 * another, or subtracts two independent vectors. The version of the method
 * that subtracts two vectors is a static method and return a Vector, the
 * other acts directly on the vector.
 *
 * @method sub
 * @chainable
 * @return Vector
 */
  sub(x: Vector): Vector;
  sub(x: number[]): Vector;
  sub(x: number[][]): Vector;
  sub(x: number, y: number, z?: number): Vector;
  sub(x: any, y?: any, z?: any) {
    if (x instanceof Vector) {
      this._x -= x._x || 0;
      this._y -= x._y || 0;
      this._z -= x._z || 0;
      return this;
    }
    else if (x instanceof Array) {
      if (x[0] instanceof Array) {

        if (x[0]) this._x -= x[0][0]; else this._x -= 0;
        if (x[1]) this._y -= x[1][0]; else this._y -= 0;
        if (x[2]) this._z -= x[2][0]; else this._z -= 0;
        return this;

      } else {
        this._x -= x[0] || 0;
        this._y -= x[1] || 0;
        this._z -= x[2] || 0;
        return this;
      }
    }
    else if (typeof(x) === 'number') {
      this._x -= x || 0;
      this._y -= y || 0;
      this._z -= z || 0;
      return this;
    }
  }

/**
 * Multiply the vector by a scalar. The static version of this method
 * creates a new Vector while the non static version acts on the vector
 * directly.
 *
 * @method mult
 * @param {Number} n the number to multiply with the vector
 * @chainable
 * @return Vector
 */
  mult(n: number): Vector {
    if (!(typeof(n) === 'number' && isFinite(n))) {
      console.warn(
        `Vector.mult():\n`+
        `\tn(${n}) is undefined or not a finite number.`
      );
      return this;
    }
    else {
      this._x *= n;
      this._y *= n;
      this._z *= n;
      return this;
    }
  }

/**
 * Divide the vector by a scalar. The static version of this method creates a
 * new Vector while the non static version acts on the vector directly.
 *
 * @method div
 * @param {number} n the number to divide the vector by
 * @chainable
 * @return Vector
 */
  div(n: number): Vector {
    if (!(typeof(n) === 'number' && isFinite(n))) {
      console.warn(
        `Vector.div():\n`+
        `\tn(${n}) is undefined or not a finite number.`
      );
      return this;
    }
    if (n === 0) {
      console.warn(
        `Vector.div():\n`+
        `\tcan't divide by 0.`
      );
      return this;
    }
    else {
      this._x /= n;
      this._y /= n;
      this._z /= n;
      return this;
    }
  }

/**
 * Calculates the magnitude (length) of the vector and returns the result as
 * a float (this is simply the equation sqrt(x*x + y*y + z*z).)
 *
 * @method mag
 * @return {Number} magnitude of the vector
 */
  mag(): number {
    return Math.sqrt(this.magSq());
  }

/**
 * Calculates the squared magnitude of the vector and returns the result
 * as a float (this is simply the equation (x*x + y*y + z*z).)
 * Faster if the real length is not required in the
 * case of comparing vectors, etc.
 *
 * @method magSq
 * @return {number} squared magnitude of the vector
 */
  magSq(): number {
    return Math.pow(this._x, 2) + Math.pow(this._y, 2) + Math.pow(this._z, 2);
  }

/**
 * Calculates the dot product of two vectors. The version of the method
 * that computes the dot product of two independent vectors is a static
 * method.
 *
 * @method dot
 * @return {Number} the dot product
 */
  dot(x: Vector): number;
  dot(x: number[]): number;
  dot(x: number[][]): number;
  dot(x: number, y: number, z?: number): number;
  dot(x: any, y?: any, z?: any) {
    if (x instanceof Vector) {
      return this.dot(x._x, x._y, x._z);
    }
    else if (x instanceof Array) {
      let vx, vy, vz = 0;
      if (x[0] instanceof Array) {
        if (x[0]) vx = x[0][0];
        if (x[1]) vy = x[1][0];
        if (x[2]) vz = x[2][0];
        return this.dot(vx, vy, vz);
      } else {
        vx = x[0] || 0;
        vy = x[1] || 0;
        vz = x[2] || 0;
        return this.dot(vx, vy, vz);
      }
    }
    else if (typeof(x) === 'number') {
      return this._x * (x || 0) + this._y * (y || 0) + this._z * (z || 0);
    }
  }

/**
 * Calculates and returns a vector composed of the cross product between
 * two vectors. Both the static and non static methods return a new Vector.
 *
 * @method cross
 * @param  {Vector} vector Vector to be crossed
 * @return {Vector} Vector composed of cross product
 */
  cross(vector: Vector): Vector {
    let x = this._y * vector._z - this._z * vector._y;
    let y = this._z * vector._x - this._x * vector._z;
    let z = this._x * vector._y - this._y * vector._x;
    return new Vector(x, y, z);
  }

/**
 * Calculates the Euclidean distance between two points (considering a
 * point as a vector object).
 *
 * @method dist
 * @param {Vector} vector the x, y, and z coordinates of a Vector
 * @return {Number} the distance
 */
  dist(vector: Vector): number {
    return vector
      .copy()
      .sub(this)
      .mag();
  }

/**
 * Normalize the vector to length 1 (make it a unit vector).
 *
 * @method normalize
 * @return {Vector} normalized Vector
 */
  normalize(): Vector {
    let len = this.mag();
    if (len !== 0) this.mult(1 / len);
    return this;
  }

/**
 * Limit the magnitude of this vector to the value used for the max
 * parameter.
 *
 * @method limit
 * @param  {Number} max the maximum magnitude for the vector
 * @chainable
 * @return Vector
 */
  limit(max: number): Vector {
    var mSq = this.magSq();
    if (mSq > Math.pow(max, 2)) {
      this.div(Math.sqrt(mSq)) //normalize it
        .mult(max);
    }
    return this;
  }

/**
 * Set the magnitude of this vector to the value used for the len
 * parameter.
 *
 * @method setMag
 * @param {number} len the new length for this vector
 * @chainable
 * @return Vector
 */
  setMag(len: number): Vector {
    return this.normalize().mult(len);
  }

/**
 * Calculate the angle of rotation for this vector (only 2D vectors)
 *
 * @method heading
 * @return {Number} the angle of rotation
 */
  heading(): number {
    return Math.atan2(this._y, this._x);
  }

/**
 * Rotate the vector by an angle (only 2D vectors), magnitude remains the
 * same
 *
 * @method rotate
 * @param {number} angle the angle of rotation
 * @chainable
 */
  rotate(angle: number): Vector {
    let newHeading = this.heading() + angle;
    let magnitude = this.mag();
    this._x = Math.cos(newHeading) * magnitude;
    this._y = Math.sin(newHeading) * magnitude;

    return this;
  }

/**
 * Calculates and returns the angle (in radians) between two vectors.
 * @method angleBetween
 * @return {Number} the angle between (in radians)
 */
  angleBetween(x: Vector): number;
  angleBetween(x: number[]): number;
  angleBetween(x: number[][]): number;
  angleBetween(x: number, y: number, z?: number): number;
  angleBetween(x: any, y?: any, z?: any) {

    if (x instanceof Vector) {
      let dotmagmag = this.dot(x) / (this.mag() * x.mag());
      // Mathematically speaking: the dotmagmag variable will be between -1 and 1
      // inclusive. Practically though it could be slightly outside this range due
      // to floating-point rounding issues. This can make Math.acos return NaN.
      //
      // Solution: we'll clamp the value to the -1,1 range
      let angle = Math.acos(Math.min(1, Math.max(-1, dotmagmag)));
      return angle;
    }
    else if (x instanceof Array) {
      let vx, vy, vz = 0;
      if (x[0] instanceof Array) {
        if (x[0]) vx = x[0][0];
        if (x[1]) vy = x[1][0];
        if (x[2]) vz = x[2][0];
      } else {
        vx = x[0] || 0;
        vy = x[1] || 0;
        vz = x[2] || 0;
      }
      return this.angleBetween(new Vector(vx, vy, vz));
    }
    else if (typeof(x) === 'number') {
      let vx, vy, vz = 0;
      vx = x || 0;
      vy = y || 0;
      vz = z || 0;
      return this.angleBetween(new Vector(vx, vy, vz));
    }
  }

/**
 * Linear interpolate the vector to another vector
 *
 * @method lerp
 * @param {Number} amt the amount of interpolation; some value between 0.0
 *                     (old vector) and 1.0 (new vector). 0.9 is very near
 *                     the new vector. 0.5 is halfway in between.
 * @chainable
 * @return Vector
 */
  lerp(amt: number, x: Vector): Vector;
  lerp(amt: number, x: number[]): Vector;
  lerp(amt: number, x: number[][]): Vector;
  lerp(amt: number, x: number, y: number, z?: number): Vector;
  lerp(amt: number, x: any, y?: any, z?: any) {

    if (x instanceof Vector) {
      return this.lerp(amt, x._x, x._y, x._z);
    }
    else if (x instanceof Array) {
      let vx, vy, vz = 0;
      if (x[0] instanceof Array) {
        if (x[0]) vx = x[0][0];
        if (x[1]) vy = x[1][0];
        if (x[2]) vz = x[2][0];
      } else {
        vx = x[0] || 0;
        vy = x[1] || 0;
        vz = x[2] || 0;
      }
      return this.lerp(amt, vx, vy, vz);
    }
    else if (typeof(x) === 'number') {
      if (amt < 0 || amt > 1) {
        console.warn(
          `Vector.lerp():\n`+
          `\t'amt' must be value between 0.0 (old vector) and 1.0 (new vector).`
        );
      }
      this._x += (x - this._x) * amt || 0;
      this._y += (y - this._y) * amt || 0;
      this._z += (z - this._z) * amt || 0;
      return this;
    }
  }

/**
 * Equality check against a Vector
 *
 * @method equals
 * @return {Boolean} whether the vectors are equals
 */
  equals(x: Vector): boolean;
  equals(x: number[]): boolean;
  equals(x: number[][]): boolean;
  equals(x: number, y: number, z?: number): boolean;
  equals(x: any, y?: any, z?: any) {
    if (x instanceof Vector) {
      return this.equals(x._x, x._y, x._z);
    }
    else if (x instanceof Array) {
      let vx, vy, vz = 0;
      if (x[0] instanceof Array) {
        if (x[0]) vx = x[0][0];
        if (x[1]) vy = x[1][0];
        if (x[2]) vz = x[2][0];
      } else {
        vx = x[0] || 0;
        vy = x[1] || 0;
        vz = x[2] || 0;
      }
      return this.equals(vx, vy, vz);
    }
    else if (typeof(x) === 'number') {
      let a, b, c = 0;
      a = x || 0;
      b = y || 0;
      c = z || 0;
      return this._x === a && this._y === b && this._z === c;
    }
  }

/**
 * return a string representation of a vector
 * This method is useful for logging vectors in the console.
 * @method toString
 * @return string
 */
  toString(): string {
    return `Vector: [${this._x}, ${this._y}, ${this._z}]`;
  }

/**
 * Return a representation of this vector as a array. This is only
 * for temporary use. If used in any other fashion, the contents should be
 * copied by using the Vector.copy() method to copy into your own array.
 *
 * @method array
 * @param dimension dimension of array (1 or 2)
 * @return number[] or number[][] with the 3 values
 */
  toArray(dimension?: number): number[];
  toArray(dimension?: number): number[][];
  toArray(dimension: any = 1): any {
    if (dimension === 1) {
      return [this._x, this._y, this._z];
    } else {
      return [[this._x], [this._y], [this._z]];
    }
  }

  // Static Methods

/**
 * Make a new 2D vector from an angle
 *
 * @method fromAngle
 * @static
 * @param  {Number} angle the desired angle, in radians
 * @param  {Number} [length] the length of the new vector (defaults to 1)
 * @return {Vector} the new Vector object
 */
  static fromAngle(angle: number, length: number = 1): Vector {
    return new Vector(length * Math.cos(angle), length * Math.sin(angle), 0);
  }
  
/**
 * Make a new 3D vector from a pair of ISO spherical angles
 *
 * @method fromAngles
 * @static
 * @param {Number} theta    the polar angle, in radians (zero is up)
 * @param {Number} phi      the azimuthal angle, in radians
 *                          (zero is out of the screen)
 * @param {Number} [length] the length of the new vector (defaults to 1)
 * @return {Vector}         the new Vector object
 */
  static fromAngles(theta: number, phi: number, length: number = 1): Vector {
    let cosPhi = Math.cos(phi);
    let sinPhi = Math.sin(phi);
    let cosTheta = Math.cos(theta);
    let sinTheta = Math.sin(theta);

    return new Vector(
      length * sinTheta * sinPhi,
      -length * cosTheta,
      length * sinTheta * cosPhi
    );
  }

/**
 * Adds two vectors together and returns a new one.
 * 
 * @method add
 * @static
 * @param  {Vector} v1
 * @param  {Vector} v2
 * @return {Vector} the resulting Vector
 */
  static add(v1: Vector, v2: Vector): Vector {
    let v = v1.copy();
    return v.add(v2);
  }

/**
 * Subtracts one Vector from another and returns a new one. The second
 * vector (v2) is subtracted from the first (v1), resulting in v1-v2.
 * 
 * @method sub
 * @static
 * @param  {Vector} v1
 * @param  {Vector} v2
 * @return {Vector} the resulting Vector
 */
  static sub(v1: Vector, v2: Vector): Vector {
    let v = v1.copy();
    return v.sub(v2);
  }

/**
 * Multiplies a vector by a scalar and returns a new vector.
 * 
 * @method mult
 * @static
 * @param  {Vector} v
 * @param  {Number} n
 * @return {Vector} the resulting new Vector
 */
  static mult(v1: Vector, n: number): Vector {
    let v = v1.copy();
    return v.mult(n);
  }

/**
 * Divides a vector by a scalar and returns a new vector.
 * 
 * @method div
 * @static
 * @param  {Vector} v
 * @param  {Number} n
 * @return {Vector} the resulting new Vector
 */
  static div(v1: Vector, n: number): Vector {
    let v = v1.copy();
    return v.div(n);
  }

/**
 * Calculates the dot product of two vectors.
 * 
 * @method dot
 * @static
 * @param  {Vector} v1 the first Vector
 * @param  {Vector} v2 the second Vector
 * @return {Number} the dot product
 */
  static dot(v1: Vector, v2: Vector): number {
    return v1.dot(v2);
  };

/**
 * Calculates the cross product of two vectors.
 * 
 * @method cross
 * @static
 * @param  {Vector} v1 the first Vector
 * @param  {Vector} v2 the second Vector
 * @return {Number} the cross product
 */
  static cross(v1: Vector, v2: Vector): Vector {
    return v1.cross(v2);
  };

/**
 * Calculates the Euclidean distance between two points (considering a
 * point as a vector object).
 * 
 * @method dist
 * @static
 * @param  {Vector} v1 the first Vector
 * @param  {Vector} v2 the second Vector
 * @return {Number} the distance
 */
  static dist(v1: Vector, v2: Vector): number {
    return v1.dist(v2);
  };

/**
 * Linear interpolate a vector to another vector and return the result as a
 * new vector.
 * 
 * @method lerp
 * @static
 * @param {Number} amt
 * @param {Vector} v1
 * @param {Vector} v2
 * @return {Number} the lerped value
 */
  static lerp(amt: number, v1: Vector, v2: Vector) {
    return v1.lerp(amt, v2);
  }

/**
 * Calculates the magnitude (length) of the vector and returns the result as
 * a float (this is simply the equation sqrt(x*x + y*y + z*z).)
 * 
 * @method mag
 * @param  {Vector} v the vector to return the magnitude of
 * @return {Number} the magnitude of v
 * @static
 */
  static mag(v: Vector): number {
    return v.mag();
  }
}
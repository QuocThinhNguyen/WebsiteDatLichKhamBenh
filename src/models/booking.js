'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // định dạng mối quan hệ
        static associate(models) {
            // define association here
        }
    };
    Booking.init({
        //id: DataTypes.INTEGER,
        statusId: DataTypes.STRING,
        docterId: DataTypes.INTEGER,
        patientid: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};